import React from "react";
import { FcLike , FcLikePlaceholder} from "react-icons/fc";
import {toast }from "react-toastify";

const Card = (props)=>{
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        // Logic??
        if(likedCourses.includes(course.id)){ 
            // iska matlab hamara course pehle se liked ho rakha hain 
            // to ab hame usse unliked karna hain 
            setLikedCourses((prev)=> prev.filter((cid) => cid!==course.id ));
            toast.warning("Like Removed");
        }
        else{
            // iska matlab course hamne pehle se liked nhi kar rakha hain 
            // to ab hame courses ko likedCourses me inlcude karna hain 
            if(likedCourses.length===0){
                // iska matlab hamne abhi koi course like nahi kiya hain 
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }

    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center">
                    <button onClick={clickHandler}>

                        {
                        likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) 
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length >100?(
                            course.description.substring(0,100)+"..."
                        ):(course.desciption+"...")
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;