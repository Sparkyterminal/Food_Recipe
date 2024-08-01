import RecipiedetailsItem from "@/components/recipie-details";

const fetchRecipieDetails = async (currentId) => {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentId}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (err) {
    throw new err(err);
  }
};

const recipiedetails = async ({ params }) => {
  const recipiesDetails = await fetchRecipieDetails(params?.details);
  return (
    <div>
      <RecipiedetailsItem recipiesDetails={recipiesDetails} />
    </div>
  );
};

export default recipiedetails;
