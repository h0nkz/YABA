import { Paper, Stack, styled } from "@mui/material";
import { Category } from "../state/budget/budgetSlice";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

interface CategoryProps {
    category : Category
}

const CategoryListItem = (categoryProps : CategoryProps) => {
   return (
    <div>
    <Item>
        <Stack spacing={2}>
            {categoryProps.category.name}
        </Stack>
    </Item>

    </div>
   );
}

export default CategoryListItem;