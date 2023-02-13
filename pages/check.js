import { connectToDatabase } from "../lib/mongodb";


const Check = ({listings}) => {
    console.log(listings)
    return (
        <div>
          <p>{listing.name}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase();
    const listing = await db.collection("listingsAndReviews").find({}).limit(20).toArray();
    const listings = JSON.parse(JSON.stringify(listing)) 
    return {
      props: { listings },
    };
  }

export default Check;