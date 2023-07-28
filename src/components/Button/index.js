import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ to,
  href,
  primary = false,
  outline = false,
  normal = false,
  onlyIcon = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  className,
  leftIcon,
  children,
  onClick,
  passProps }) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx("wrapper", {
    [className]: className,
    leftIcon,
    primary,
    outline,
    normal,
    onlyIcon,
    rounded,
    disabled,
    small,
    large
  });

  return (
    <Comp className={classes} {...props}>
      {/* {leftIcon && <span style={{marginRight:'10px', fontSize:'20px'}}>{leftIcon}</span>} */}
      {leftIcon}
      <span>{children}</span>
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  normal: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button;
