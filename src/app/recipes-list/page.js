import RecipieList from "@/components/recipie-list";

const fetchRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();

    return data?.recipes;
  } catch (err) {
    throw err;
  }
};
const Recipies = async () => {
  const recipieslist = await fetchRecipes();
  return (
    <div>
      <RecipieList recipieslist={recipieslist} />
    </div>
  );
};

export default Recipies;
