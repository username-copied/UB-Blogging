import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Kalari from "../assets/Kalri.jpg";

const OneWork = ({ work }) => {
  return (
    work && (
      <>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img src={Kalari} alt="profile" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-bold"
            >
              {work.title}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </>
    )
  );
};

export default OneWork;
