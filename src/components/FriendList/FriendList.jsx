import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = () => {
    return (<ul>
        {/* Кількість li залежить від кількості об'єктів в масиві */}
        <li>
            <FriendListItem />
        </li>
    </ul>
    )
}

export default FriendList;