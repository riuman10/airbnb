import { useEffect, useState } from "react";
import Image from "next/image";

const Check = () => {
  const [restaurents, setRestaurants] = useState([]);

  const getData = async () => {
    const results = await fetch("/api/listing").then((response) =>
      response.json()
    );
    setRestaurants(
      results.results.map((item) => {
        return {
          _id: item._id,
          name: item.name,
          image: item.images,
          house_rules: item.house_rules,
          notes: item.notes,
          summary: item.summary,
        };
      })
    );
  };

  const postLike = async (property) => {
    const results = await fetch(`/api/post_likes`, {
      method: "POST",
      body: JSON.stringify(property),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    console.log(results);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(restaurents);
  return (
    <div className="flex gap-2 flex-wrap">
      {restaurents &&
        restaurents.map((item, i) => (
          <div
            key={i}
            className="border w-[400px] flex flex-col justify-center items-center"
          >
            <p className="text-red-400">{item.name}</p>
            <img
              src={item.image.picture_url}
              className="w-[330px] h-[300px] rounded-lg"
            />
            <p className="text-teal-400 truncate">{item.notes}</p>
            <p className="text-center">{item.house_rules}</p>
            <button className="py-1 px-2 border" onClick={() => postLike(item)}>
              Like
            </button>
          </div>
        ))}
    </div>
  );
};

export default Check;
