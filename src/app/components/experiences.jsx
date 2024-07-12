import React from 'react';
import { experiences } from '../constantes';

const Experience = () => {
    return (
        <main className='mb-[4.853vw]'>
            <div className='flex flex-col items-center '>
         <p className="text-[4.404vw] font-extrabold ">EXPERIENCES</p>
         <p className='bg-gradient-to-r from-violet-400 to-orange-400 text-transparent bg-clip-text text-sm font-medium tracking-widest mb-4'>EXPLORE NOW</p>
         </div>
         <ul>
         {experiences.map((experience, index) => (
                <li key={index} className="mb-4">
                    <div className='flex justify-between mx-4 md:mx-10 mb-16'>
                        <div>
                            <span className='font-bold text-3xl '>{experience.company} / </span>
                            <span className=' md:text-3xl '><br/>{experience.position}</span>
                        </div>
                        <aside className=' sm:mr-5'>{experience.dateOfBegin}-{experience.dateOfEnd},{experience.city}</aside>
                    </div>
                   <div className='flex justify-center'>
                    <p className='text-center sm:w-[60vw] mx-8'> 
                        {experience.description} and I am well-versed in the latest web development trends
                        and technologies.
                    </p>
                    </div>

                </li>
            ))

            }
        </ul>
       
        

        <div className='flex flex-row-reverse  gap-[4.167vw] justify-center mt-10'>
        <svg  id="react" width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.3175 16.8729C26.5691 16.8729 28.4054 18.7072 28.4054 21C28.4054 23.1836 26.5691 25.0397 24.3175 25.0397C22.0659 25.0397 20.2296 23.1836 20.2296 21C20.2296 18.7072 22.0659 16.8729 24.3175 16.8729ZM14.1961 38.469C15.5733 39.2988 18.5901 38.0323 22.0659 34.7568C20.9291 33.4685 19.8143 32.071 18.7649 30.608C17.0033 30.4395 15.252 30.1771 13.5184 29.8218C12.4036 34.4948 12.8189 37.7047 14.1961 38.469ZM15.7482 25.935L15.1142 24.8213C14.8738 25.4546 14.6333 26.0878 14.4803 26.6993C15.0705 26.8303 15.7263 26.9395 16.404 27.0486L15.7482 25.935ZM30.0449 24.2754L31.8156 21L30.0449 17.7246C29.3891 16.5672 28.6896 15.5409 28.0556 14.5146C26.8752 14.4491 25.6291 14.4491 24.3175 14.4491C23.0059 14.4491 21.7598 14.4491 20.5794 14.5146C19.9454 15.5409 19.2459 16.5672 18.5901 17.7246L16.8194 21L18.5901 24.2754C19.2459 25.4328 19.9454 26.4591 20.5794 27.4854C21.7598 27.5509 23.0059 27.5509 24.3175 27.5509C25.6291 27.5509 26.8752 27.5509 28.0556 27.4854C28.6896 26.4591 29.3891 25.4328 30.0449 24.2754ZM24.3175 9.60147C23.9022 10.0819 23.4649 10.5841 23.0277 11.1737H25.6073C25.1701 10.5841 24.7329 10.0819 24.3175 9.60147ZM24.3175 32.3985C24.7329 31.9181 25.1701 31.4159 25.6073 30.8263H23.0277C23.4649 31.4159 23.9022 31.9181 24.3175 32.3985ZM34.417 3.53099C33.0617 2.70122 30.0449 3.96772 26.5691 7.24316C27.7059 8.5315 28.8208 9.92902 29.8701 11.392C31.6626 11.5667 33.4333 11.8288 35.1166 12.1782C36.2315 7.50519 35.8161 4.29526 34.417 3.53099ZM32.8868 16.065L33.5208 17.1787C33.7612 16.5454 34.0017 15.9122 34.1547 15.3007C33.5645 15.1697 32.9087 15.0605 32.231 14.9514L32.8868 16.065ZM36.0566 0.670445C39.2701 2.50469 39.6198 7.3305 38.2645 12.9643C43.817 14.602 47.8175 17.3097 47.8175 21C47.8175 24.6903 43.817 27.398 38.2645 29.0357C39.6198 34.6695 39.2701 39.4953 36.0566 41.3296C32.865 43.1638 28.5147 41.0675 24.3175 37.0715C20.1203 41.0675 15.7701 43.1638 12.5566 41.3296C9.36495 39.4953 9.01518 34.6695 10.3705 29.0357C4.81797 27.398 0.817505 24.6903 0.817505 21C0.817505 17.3097 4.81797 14.602 10.3705 12.9643C9.01518 7.3305 9.36495 2.50469 12.5566 0.670445C15.7701 -1.1638 20.1203 0.93248 24.3175 4.92851C28.5147 0.93248 32.865 -1.1638 36.0566 0.670445ZM35.4226 21C36.1659 22.6377 36.8217 24.2754 37.3682 25.935C41.9589 24.5593 44.5384 22.594 44.5384 21C44.5384 19.406 41.9589 17.4407 37.3682 16.065C36.8217 17.7246 36.1659 19.3623 35.4226 21ZM13.2124 21C12.4691 19.3623 11.8133 17.7246 11.2668 16.065C6.67611 17.4407 4.09658 19.406 4.09658 21C4.09658 22.594 6.67611 24.5593 11.2668 25.935C11.8133 24.2754 12.4691 22.6377 13.2124 21ZM32.8868 25.935L32.231 27.0486C32.9087 26.9395 33.5645 26.8303 34.1547 26.6993C34.0017 26.0878 33.7612 25.4546 33.5208 24.8213L32.8868 25.935ZM26.5691 34.7568C30.0449 38.0323 33.0617 39.2988 34.417 38.469C35.8161 37.7047 36.2315 34.4948 35.1166 29.8218C33.4333 30.1712 31.6626 30.4333 29.8701 30.608C28.8208 32.071 27.7059 33.4685 26.5691 34.7568ZM15.7482 16.065L16.404 14.9514C15.7263 15.0605 15.0705 15.1697 14.4803 15.3007C14.6333 15.9122 14.8738 16.5454 15.1142 17.1787L15.7482 16.065ZM22.0659 7.24316C18.5901 3.96772 15.5733 2.70122 14.1961 3.53099C12.8189 4.29526 12.4036 7.50519 13.5184 12.1782C15.252 11.8229 17.0033 11.5604 18.7649 11.392C19.8143 9.92902 20.9291 8.5315 22.0659 7.24316Z" fill="url(#paint0_linear_205_7)"/>
<defs>
<linearGradient id="paint0_linear_205_7" x1="24.3175" y1="0" x2="24.3175" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDFDFD"/>
<stop offset="1" stop-color="white" stop-opacity="0.18"/>
</linearGradient>
<linearGradient id="reactHover" x1="24.5558" y1="-3.60463e-08" x2="24.0792" y2="42" gradientUnits="userSpaceOnUse">
<stop offset="0.9999" stop-color="#61DBFB" stop-opacity="0.733333"/>
<stop offset="1" stop-color="white" stop-opacity="0.18"/>
</linearGradient>
</defs>
</svg>
<div className='hover:bg-slate-50 border rounded-full border-transparent'>
<svg id="next" width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6149 39.3776C31.4587 39.4603 31.4718 39.4865 31.6215 39.4104C31.6676 39.3916 31.7098 39.3644 31.7461 39.3303C31.7461 39.3028 31.7461 39.3028 31.6149 39.3776ZM31.9299 39.2069C31.8551 39.2686 31.8551 39.2686 31.9443 39.2279C31.9773 39.2125 32.0075 39.1917 32.0336 39.1663C32.0336 39.1308 32.0126 39.1387 31.9299 39.2069ZM32.1346 39.0836C32.0598 39.1453 32.0598 39.1453 32.1491 39.1046C32.1822 39.0888 32.2124 39.0675 32.2383 39.0416C32.2383 39.0088 32.2173 39.0153 32.1346 39.0836ZM32.342 38.9615C32.2672 39.0232 32.2672 39.0232 32.3538 38.9812C32.4024 38.9549 32.4431 38.9274 32.4431 38.9195C32.4431 38.8867 32.4221 38.8933 32.342 38.9615ZM32.6216 38.7764C32.4785 38.8723 32.4286 38.9339 32.5599 38.8657C32.6478 38.8119 32.7974 38.6937 32.7712 38.6937C32.7147 38.7147 32.6675 38.7502 32.6202 38.7764H32.6216ZM20.0705 0.00964711C19.9747 0.0162097 19.6873 0.0424603 19.4353 0.0634607C13.4662 0.604222 7.8817 3.81729 4.342 8.76682C2.38587 11.4815 1.11435 14.6284 0.635619 17.9401C0.466312 19.0951 0.445312 19.4364 0.445312 21.0022C0.445312 22.5667 0.466312 22.9027 0.635619 24.0578C1.77877 31.9474 7.39084 38.5704 14.9979 41.0248C16.3668 41.4619 17.8013 41.7637 19.4353 41.9488C20.0705 42.0171 22.8175 42.0171 23.4527 41.9488C26.2771 41.6338 28.6619 40.9369 31.0217 39.7333C31.3839 39.5495 31.4522 39.5009 31.4036 39.4603C30.2524 37.9385 29.111 36.4094 27.9794 34.873L24.6234 30.3408L20.4196 24.1129C19.0213 22.0276 17.6086 19.952 16.1817 17.8863C16.1673 17.8863 16.1489 20.6544 16.141 24.0302C16.1266 29.9431 16.1266 30.1833 16.0518 30.3198C15.98 30.4847 15.8515 30.6184 15.6895 30.6965C15.5596 30.7582 15.4428 30.7713 14.822 30.7713H14.1119L13.9269 30.6558C13.811 30.5815 13.7168 30.4778 13.6539 30.3553L13.5647 30.1702L13.5712 21.9393L13.5857 13.7085L13.7156 13.5444C13.7986 13.4436 13.9007 13.3601 14.0161 13.299C14.1881 13.2163 14.2563 13.2032 14.9664 13.2032C15.7998 13.2032 15.9376 13.236 16.1568 13.4762C17.8597 16.0092 19.548 18.552 21.2215 21.1046C23.9501 25.2417 27.6749 30.8868 29.5058 33.6563L32.8355 38.6951L32.9995 38.5861C34.5998 37.5227 36.0499 36.2491 37.311 34.7995C39.9563 31.7716 41.6728 28.0453 42.255 24.0669C42.4243 22.9119 42.4453 22.5694 42.4453 21.0048C42.4453 19.439 42.4243 19.1043 42.255 17.9493C41.1119 10.0597 35.4998 3.43665 27.8928 0.980917C26.4711 0.530617 25.0078 0.224137 23.5249 0.0660858C23.1272 0.0253974 20.4131 -0.0231661 20.0718 0.0122722L20.0705 0.00964711ZM28.6632 12.711C28.7608 12.7589 28.8479 12.8259 28.9194 12.9079C28.9908 12.99 29.0451 13.0854 29.0792 13.1887C29.1147 13.299 29.1212 15.5815 29.1147 20.7226L29.1002 28.1043L27.8022 26.1092L26.4963 24.1129V18.7538C26.4963 15.2796 26.5107 13.3318 26.5291 13.236C26.5934 13.0163 26.7407 12.8303 26.9399 12.7175C27.1027 12.6348 27.1657 12.6283 27.8153 12.6283C28.423 12.6283 28.5267 12.6348 28.6632 12.711Z" fill="url(#paint0_linear_205_4)"/>
<defs>
<linearGradient id="paint0_linear_205_4" x1="21.4453" y1="0" x2="21.4453" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDFDFD"/>
<stop offset="1" stop-color="white" stop-opacity="0.18"/>
</linearGradient>
<linearGradient id="nextHover" x1="21.4453" y1="0" x2="21.4453" y2="42" gradientUnits="userSpaceOnUse">
<stop offset="0.9999"/>
<stop offset="1" stop-color="#666666"/>
</linearGradient>
</defs>
</svg>
</div>

<svg  id='css' width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.372192 0L3.73812 37.7874L18.8512 42L34.0042 37.7727L37.3722 0H0.372192ZM30.3777 8.6583L29.2557 21.2457L29.2599 21.315L29.2557 21.4704L28.4573 30.2694L28.3712 31.0527L18.8722 33.6777L18.8638 33.6861L9.38372 31.0443L8.74079 23.7678H13.3884L13.7182 27.468L18.8722 28.8645L24.0429 27.4491L24.5892 21.4242H13.7813L13.6888 20.4057L13.4766 18.0201L13.3674 16.7391H25.0031L25.4276 12.0519H7.69865L7.60621 11.0334L7.3961 8.6457L7.28474 7.3647H30.4891L30.3777 8.6583Z" fill="url(#paint0_linear_205_6)"/>
<defs>
<linearGradient id="paint0_linear_205_6" x1="18.8722" y1="0" x2="18.8722" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDFDFD"/>
<stop offset="1" stop-color="white" stop-opacity="0.18"/>
</linearGradient>
<linearGradient id="cssHover" x1="18.8722" y1="0" x2="18.8722" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#264DE4"/>
<stop offset="1" stop-color="#264DE4"/>
</linearGradient>
</defs>
</svg>


<svg id='html' width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.890686 0L4.26119 37.8L19.3864 42L34.5511 37.7948L37.9268 0H0.893311H0.890686ZM30.5899 12.3638H12.8502L13.2728 17.1124H30.1699L28.8968 31.3451L19.3864 33.9806L9.88919 31.3451L9.24081 24.0634H13.8949L14.2257 27.7646L19.3891 29.1559L19.3996 29.1532L24.5656 27.7594L25.1011 21.7481H9.03344L7.78394 7.728H31.0073L30.5899 12.3638Z" fill="url(#paint0_linear_205_5)"/>
<defs>
<linearGradient id="paint0_linear_205_5" x1="19.4087" y1="0" x2="19.4087" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDFDFD"/>
<stop offset="1" stop-color="white" stop-opacity="0.18"/>
</linearGradient>
<linearGradient id="htmlHover" x1="19.4087" y1="0" x2="19.4087" y2="42" gradientUnits="userSpaceOnUse">
<stop offset="0.9997" stop-color="#E34C26"/>
<stop offset="0.9998"/>
</linearGradient>
</defs>
</svg>


<svg id='js' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5 0H4.5C2.01562 0 0 2.01562 0 4.5V37.5C0 39.9844 2.01562 42 4.5 42H37.5C39.9844 42 42 39.9844 42 37.5V4.5C42 2.01562 39.9844 0 37.5 0ZM22.8562 32.7562C22.8562 36.8438 20.4562 38.7094 16.9594 38.7094C13.8 38.7094 11.9719 37.0781 11.0344 35.1L14.25 33.1594C14.8687 34.2562 15.4312 35.1844 16.7906 35.1844C18.0844 35.1844 18.9094 34.6781 18.9094 32.7V19.2844H22.8562V32.7562ZM32.1937 38.7094C28.5281 38.7094 26.1562 36.9656 25.0031 34.6781L28.2188 32.8219C29.0625 34.2 30.1687 35.2219 32.1094 35.2219C33.7406 35.2219 34.7906 34.4062 34.7906 33.2719C34.7906 31.9219 33.7219 31.4437 31.9125 30.6469L30.9281 30.225C28.0781 29.0156 26.1937 27.4875 26.1937 24.2719C26.1937 21.3094 28.4531 19.0594 31.9687 19.0594C34.4812 19.0594 36.2812 19.9312 37.575 22.2187L34.5 24.1875C33.825 22.9781 33.0938 22.5 31.9594 22.5C30.8062 22.5 30.075 23.2312 30.075 24.1875C30.075 25.3687 30.8062 25.8469 32.5031 26.5875L33.4875 27.0094C36.8438 28.4437 38.7281 29.9156 38.7281 33.2156C38.7281 36.7594 35.9344 38.7094 32.1937 38.7094Z" fill="url(#paint0_linear_205_3)"/>
    <defs>
    <linearGradient id="paint0_linear_205_3" x1="21" y1="0" x2="21" y2="42" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FDFDFD"/>
    <stop offset="1" stop-color="white" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="jsHover" x1="21" y1="0" x2="21" y2="42" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD900"/>
    <stop offset="1" stop-color="#FFD900" stop-opacity="0.18"/>
    </linearGradient>
    </defs>
</svg>

        </div>
        
        </main>
    );
}
export default Experience;