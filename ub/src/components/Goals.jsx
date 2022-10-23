import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Culture from "../assets/CultureCard.jpg";
import Nationalism from "../assets/NationalismCard.jpg";
import Governance from "../assets/GovernanceCard.jpg";
import Liberty from "../assets/Liberty.png";
import "animate.css";

export default function Goals() {
  return (
    <div className="p-4 m-4 grid md:grid-cols-2 justify-between justify-items-center gap-16 ">
      {/* // Goal 1 */}
      <Card className="w-96 animate__animated animate__bounceInRight animate__slower mx-auto">
        <CardHeader floated={false} className="h-80">
          <img src={Culture} alt="profile" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Culture
          </Typography>
          <Typography color="blue-gray" className="font-semibold" textGradient>
            Indian culture is the oldest and famous among the other cultures of
            the world. Indian literature refers to an amalgamation of distinct
            cultures of all communities, traditions, customs, and religions in
            India. The diversity of Indian culture is known worldwide.
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
      {/* //Goal 2 */}
      <Card className="w-96 animate__animated animate__bounceInRight animate__slower">
        <CardHeader floated={false} className="h-80 ">
          <img src={Nationalism} alt="profile" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Nationalism
          </Typography>
          <Typography color="blue-gray" className="font-semibold" textGradient>
            Nationalism is an ideology which shows an individual’s love &
            devotion towards his nation. It is actually people’s feelings for
            their nation as superior to all other nations. Nationalism can be
            defined as collective devotion of all the nationals towards their
            country.
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
      {/* Goal 3 */}

      <Card className="w-96 animate__animated animate__bounceInRight animate__slower">
        <CardHeader floated={false} className="h-80 ">
          <img src={Governance} alt="profile" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Governance
          </Typography>
          <Typography color="blue-gray" className="font-semibold" textGradient>
            Governance is all the processes of interactions be they through the
            laws, norms, power or language of an organized society over a social
            system. It is done by the government of a state, by a market, or by
            a network. It is the decision-making among the actors involved in a
            collective problem that leads to the creation, reinforcement, or
            reproduction of social norms and institutions. At Utkrishta Bharath,
            we wish to teach and give an understanding of Law, Governance and
            Administration to engineering students.
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
      {/* goal 4 */}
      <Card className="w-96 animate__animated animate__bounceInRight animate__slower mx-auto">
        <CardHeader floated={false} className="h-80">
          <img src={Liberty} alt="profile" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Liberty
          </Typography>
          <Typography color="blue-gray" className="font-semibold" textGradient>
            Broadly speaking, liberty is the ability to do as one pleases, or a
            right or immunity enjoyed by prescription or by grant (i.e.
            privilege). It is a synonym for the word freedom. In modern
            politics, liberty is understood as the state of being free within
            society from control or oppressive restrictions imposed by authority
            on one's way of life, behavior, or political views.
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
    </div>
  );
}
