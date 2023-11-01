import { Button, Card, Rate } from "antd"
import Link from 'next/link';


type ServiceCardProps = {
    id: string
    title: string
    speed: string
    time: string
    talkTime: string
    location: string
    description: string
    availability: boolean
    rating: number
    price: number
}

const NBServiceCard = ({service}: {service: ServiceCardProps}) => {
    return (
        <Card headStyle={{fontSize: "30px" , height: "70px", background: '#B9314F', color: "white"}} hoverable title={service?.title} >
              <p className="text-center text-2xl mb-4 font-bold" style={{color: '##3A4F41'}}>{service?.speed}</p>
              <p className="text-center text-lg text-gray-500 mb-2">{service?.time} Unlimited</p>
              {service?.time && <div className="border border-gray-200 border-dashed"></div>}
              <p className="text-center text-lg text-gray-500 my-2">Talk Time - {service?.talkTime}</p>
              {service?.talkTime && <div className="border border-gray-200 border-dashed"></div>}
              <p className="text-center text-lg text-gray-500 my-2">Location - {service?.location}</p>
              {service?.location && <div className="border border-gray-200 border-dashed"></div>}
              <p className="text-center  text-gray-500 my-2">{service?.description}</p>
              {(service?.description !== null ||service?.description !== '')  && <div className="border border-gray-200 border-dashed"></div>}
              <p className="text-center text-lg text-gray-500 my-2">{service?.availability=== true ? <span>Available</span>: <span>Not Available</span>}</p>
              {service?.availability && <div className="border border-gray-200 border-dashed"></div>}
              <p className="text-center my-2">Rating: <Rate disabled defaultValue={service?.rating} /></p>
              <p className="text-red-600 my-4 text-2xl text-center"> {service?.price}৳ /Month </p>
              <div className="w-fit mx-auto">
              <Button size="large"  type="primary" danger><Link href={`/order/${service?.id}`}>Get Service</Link></Button>
              </div>
            </Card>
    );
};

export default NBServiceCard;