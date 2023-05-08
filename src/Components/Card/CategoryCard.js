import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CategoryCard = ({ category }) => {
  const { image, categoryName, title } = category;
  return (
    <Card className="">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {categoryName}
        </Typography>
        <Typography>{title}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
