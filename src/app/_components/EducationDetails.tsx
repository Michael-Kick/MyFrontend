import LiIcon from "./LiIcon";
import formatMonthYearISO from "../_utils/DateFormat";

interface EducationElementProps {
    eduElement: EducationElementObject
}

interface EducationElementObject {
    academicTitle: string,
    university: string,
    uniLink: string,
    thesisTitle: string,
    description: string[],
    start_date: Date,
    end_date: Date,
    country: string,
    city: string,
    skills: number[]
}

export const EducationDetails = (props: EducationElementProps) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
            <LiIcon/>
            <div>
                <h3 className="capitalize font-bold text-3xl">{props.eduElement.academicTitle}&nbsp;<a
                    href={props.eduElement.uniLink} className="text-primary">
                    @{props.eduElement.university}</a></h3>
                <span className="font-medium text-primary">
                    {formatMonthYearISO(props.eduElement.start_date) + ' - ' + formatMonthYearISO(props.eduElement.end_date)} | {props.eduElement.city + ", " + props.eduElement.country}
                </span>
                <h4 className="font-bold text-2xl">{props.eduElement.thesisTitle}</h4>
                <ul className="list-disc pl-6 font-medium w-full">
                    {props.eduElement.description.map((bulletPoint: string, id: number) => (
                        <li key={id}>{bulletPoint}</li>
                    ))}
                </ul>
            </div>
        </li>

    );
}