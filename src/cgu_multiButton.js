import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const changeText = (event) => {
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}
const MultiButton = (num) => {
    /*
    var output = [];
    for (let i = 1; i < num + 1; ++i)
        output.push(<Button variant="contained" color="primary" onClick={changeText}>第{i}個按鍵</Button>)
    return output;
    */
    var output = [];
    output.push(
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon /></IconButton>)
    output.push(<IconButton color="primary" aria-label="delete ">
        <DeleteIcon /></IconButton >)
    output.push(<IconButton color="primary" aria-label="add an alarm">
        <AlarmIcon /></IconButton>)
    return output;
}

export default MultiButton;