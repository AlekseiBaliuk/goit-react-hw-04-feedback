import PropTypes from 'prop-types';
import { NotificationTitle } from './Notification.styled';

const Notification = ({ title }) => {
  return <NotificationTitle>{title}</NotificationTitle>;
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
