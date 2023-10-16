import { useCategoriesQuery } from "@/redux/api/categoryApi";

const CategorySection = () => {
    const {data} = useCategoriesQuery({})
    return (
        <div>
            <p></p>
        </div>
    );
};

export default CategorySection;