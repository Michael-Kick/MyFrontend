export interface EmailProps {
    firstName: string,
    lastName: string,
    message: string,

}

export const  EmailTemplate = ({firstName, lastName,message}: EmailProps) => {
    return (
        <div>
            <h1>Hello World {firstName} {lastName}</h1>
            <p>{message}</p>
        </div>
    );
}
