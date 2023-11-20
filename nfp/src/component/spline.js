"use client";

import Spline from '@splinetool/react-spline';
import 'dotenv/config';
require('dotenv').config();


export default function PizzaBox() {

  return (
    <Spline scene={process.env.NEXT_PUBLIC_SPLINE_TOKEN}/>
  );
}
