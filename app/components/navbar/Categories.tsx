'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { IoRestaurantSharp } from "react-icons/io5";
import { IoCafe } from "react-icons/io5";


import { IoFastFood } from "react-icons/io5";

import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoPrintSharp } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";



import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
{
    label: 'Clothing Retail',
    icon: GiClothes ,
    description: 'Explore the latest fashion in this clothing retail stores!',
  },
   {
     label: 'Food',
     icon: IoFastFood ,
     description: 'Indulge in delicious culinary experiences at this establishment!',
   },
  {
    label: 'Restaurant',
    icon: IoRestaurantSharp,
    description: 'Savor exquisite dishes at this renowned restaurant!',
  },
  {
    label: 'Cafe',
    icon: IoCafe,
    description: 'Relax and enjoy your favorite drinks at this cozy cafe!',
  },
  {
    label: 'Local Market',
    icon: FaStoreAlt ,
    description: 'Discover local treasures at the vibrant market!',
  },
  {
    label: 'Health and Wellness',
    icon: MdOutlineSportsGymnastics ,
    description: 'Prioritize your well-being with health and wellness activities at this establishment!',
  },
  
  {
    label: 'Printing Store',
    icon: IoPrintSharp ,
    description: 'Sticker Cut out and installation thank you for choosing Printed Blessings Co',
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;
