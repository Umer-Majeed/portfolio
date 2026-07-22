"use client";

import { motion } from "framer-motion";
import {
Mail,
Phone,
MapPin
} from "lucide-react";

const items=[

{
icon:Mail,
title:"Email",
value:"Contact2mrumer@gmail.com"
},

{
icon:Phone,
title:"Phone",
value:"+92 319 5360729"
},

{
icon:MapPin,
title:"Location",
value:"Pakistan"
}

]

export default function ContactInfo(){

return(

<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-8
backdrop-blur-xl
"

>

<h3 className="mb-8 text-2xl font-bold">

Contact Information

</h3>

<div className="space-y-6">

{

items.map((item)=>(

<div

key={item.title}

className="flex items-center gap-5"

>

<div

className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
"

>

<item.icon size={22}/>

</div>

<div>

<p className="text-sm text-gray-500">

{item.title}

</p>

<p className="mt-1 font-semibold">

{item.value}

</p>

</div>

</div>

))

}

</div>

</motion.div>

)

}