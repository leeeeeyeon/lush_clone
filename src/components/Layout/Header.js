import './css/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div className="contents">
                <div className="logo">
                    <img alt="LUSH" src="img/logo.png" />
                </div>

                <nav className="navigation">
                <ul>
                    <Link>
                        제품
                    </Link>
                    <Link>
                        러쉬 소개
                    </Link>
                    <Link>
                        매장 안내
                    </Link>
                    <Link>
                        스파
                    </Link>
                    <Link>
                        이벤트
                    </Link>
                    <Link>
                        검색
                    </Link>
                    <Link>
                        장바구니
                    </Link>
                    <Link>
                        마이 페이지
                    </Link>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header