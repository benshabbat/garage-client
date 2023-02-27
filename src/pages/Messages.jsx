import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessagesByIdUser } from "../features/user/userSlice";
import { useParams } from "react-router-dom";

const Messages = () => {
  const { messages, user } = useSelector((state) => state.user);

  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessagesByIdUser(userId));
  }, [userId, dispatch]);
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>from</th>
            <th>to</th>
            <th>title</th>
            <th>description</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {messages &&
            messages.map((message) => {
              const dateArray = message.updatedAt.slice(0, 10).split("-");
              const [year, month, day] = dateArray;
              return (
                <tr key={message._id}>
                  <td>{message.from}</td>
                  <td>{message.to}</td>
                  <td>{message.title}</td>
                  <td>{message.description}</td>
                  <td>{`${day}/${month}/${year}`}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
