import { useSelector } from "react-redux";
import { RootState } from '../store/reducers';
import { JockItem } from '../Components/JockItem';

export const Cart = () => {
    const jockCart = useSelector((state: RootState) => state.cartJocks.jockes);

    return (
        <div>
            {jockCart.map(i =>
                    <JockItem item={i} />
            )}
        </div>
    );
}

