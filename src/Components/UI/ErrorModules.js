// import ReactDOM from 'react';

// import Button from './Button'
// import classes from './ErrorModal.module.css'
// import Card from './Card';



// const Backdrop = (props)=>
// {
//     return ( <div className={classes.backdrop} onClick={props.onConfirm} />);
// };

// const ModalOverlay = props =>
// {
//     return (
//     <Card className={classes.modal}>
//     <header className={classes.header}>
//         <h2>{props.title}</h2>
//     </header>
//     <div className={classes.content}>
//         <p>{props.message}</p>
//     </div>
//         <footer className={classes.actions}>
//             <Button onClick={props.onConfirm}>okay</Button>
//         </footer>
//     </Card>
//     );
// }

// const ErrorModal = (props) =>{
// return (
//     <>

//        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, 
//        document.getElementById('backdrop-root'))}

//        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
//        document.getElementById('overlay-root'))}

//        </>

// );
// }
// export default ErrorModal;


import Button from './Button'
import classes from './ErrorModal.module.css'
import Card from './Card';

const ErrorModal = (props) =>
{
return (
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm} />
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>okay</Button>
                </footer>
        </Card>
    </div>
);
}
export default ErrorModal;