import LiIcon from "./LiIcon";

interface WorkElementProps {
    resumeElement: WorkElementObject
}

interface WorkElementObject {
    companyName: string,
    companyLink: string,
    activity: string,
    projectName: string,
    description: string,
    start_date: Date,
    end_date: Date,
    country: string,
    city: string,
    skills: number[]
}

export const Details = (props:WorkElementProps) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <LiIcon/>
            <div>
                <h3 className="capitalize font-bold text-2xl">{props.resumeElement.activity}&nbsp;<a href={props.resumeElement.companyLink} className="text-primary">
                    @{props.resumeElement.companyName}</a></h3>
                <span className="capitalize font-medium text-contrastDark">
                    {"7Months"} | {props.resumeElement.city + ", " + props.resumeElement.country}
                </span>
                <p className="font-medium w-full" >
                    {props.resumeElement.description}
                </p>
            </div>
        </li>
        
    );
}
