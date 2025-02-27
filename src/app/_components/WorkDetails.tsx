import LiIcon from "./LiIcon";
import formatMonthYearISO from "../_utils/DateFormat";

interface WorkElementProps {
    resumeElement: WorkElementObject
}

interface WorkElementObject {
    companyName: string,
    companyLink: string,
    activity: string,
    projectName: string,
    description: string[],
    start_date: Date,
    end_date: Date,
    country: string,
    city: string,
    skills: number[]
}

export const WorkDetails = (props: WorkElementProps) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
            <LiIcon/>
            <div>
                <h3 className="capitalize font-bold text-3xl">{props.resumeElement.activity}&nbsp;<a
                    href={props.resumeElement.companyLink} className="text-primary">
                    @{props.resumeElement.companyName}</a></h3>
                <span className="font-medium text-primary">
                    {formatMonthYearISO(props.resumeElement.start_date) + ' - ' + formatMonthYearISO(props.resumeElement.end_date)} | {props.resumeElement.city + ", " + props.resumeElement.country}
                </span>
                <h4 className="font-bold text-2xl">{props.resumeElement.projectName}</h4>
                <ul className="list-disc pl-6 font-medium w-full">
                    {props.resumeElement.description.map((bulletPoint: string, id: number) => (
                        <li key={id}>{bulletPoint}</li>
                    ))}
                </ul>
            </div>
        </li>

    );
}
