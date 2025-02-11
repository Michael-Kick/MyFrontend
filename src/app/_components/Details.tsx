interface WorkElementProps {
    resumeElement: WorkElementObject
}

interface WorkElementObject {
    companyName: string,
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
        <li>
            <div>
                <h3>{props.resumeElement.activity}</h3>
            </div>
        </li>
        
    );
}
