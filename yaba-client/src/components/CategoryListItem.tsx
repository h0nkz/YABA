import { Grid2, Paper, Stack, styled, Typography, typographyClasses } from "@mui/material";
import { Category } from "../state/budget/budgetSlice";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    background: theme.palette.background.paper
    
}));

interface CategoryProps {
    category : Category
}

const CategoryListItem = (categoryProps : CategoryProps) => {
   return (
    <div>
    <Item>
        <Stack spacing={2}>
            <Grid2 container>
                    <Grid2 size={{ xs: 12, sm: 1, md: 6 }}>
                        <Typography>
                            {categoryProps.category.name}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 1, md: 6 }}>
                    <Typography>
                        {categoryProps.category.allocation}
                    </Typography>
                    </Grid2>
            </Grid2>
            
            
        </Stack>
    </Item>

    </div>
   );
}

export default CategoryListItem;