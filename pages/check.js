// import { connectToDatabase } from "../lib/mongodb";
import { useEffect, useState } from "react";

const Check = () => {
  const [restaurents, setRestaurants] = useState([]);

  const getData = async () => {
    const results = await fetch("/api/listing").then((response) =>
      response.json()
    );
    setRestaurants(results.results.map((item) => {
      return {
        id : item._id,
        name : item.name,
        image : item.images,
        house_rules : item.house_rules,
        notes : item.notes,
        summary : item.summary
      }
    }));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(restaurents);
  return (
    <div>
      {
        restaurents && restaurents.map((item , i) => (
          <div>
            <p className="text-red-400">{item.name}</p>
            <p>{item.house_rules}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Check;
