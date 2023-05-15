import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { image, car_model, price, categoryName, _id } = product;
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="..." layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {car_model}
        </Typography>
        <Typography>{price} BDT</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/${categoryName}/${_id}`}>
          <Button>Show Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
