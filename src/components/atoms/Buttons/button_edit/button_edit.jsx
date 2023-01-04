

export const Button_edit = ({...props}) => {

    const { url } = props;

    return(
        <button type="button" href={url}>Edit</button>
    )
}