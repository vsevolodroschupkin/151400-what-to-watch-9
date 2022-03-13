import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type LogoProps = {
  className?: string;
}

function Logo(props: LogoProps): JSX.Element {
  const {className} = props;
  const linkClassName = className ? className : '';

  return (
    <div className="logo">
      <Link to={AppRoute.MAIN} className={`logo__link ${linkClassName}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
