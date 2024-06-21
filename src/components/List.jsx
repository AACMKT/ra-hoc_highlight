import { Video, Article } from "./contentType";
import { Wrapper } from "./Wrapper";

export function List(props) {
    return props.list.map((item, index) => {
        let WithWrapper = <></>
        switch (item.type) {
            case 'video':
                WithWrapper = Wrapper(Video, item)
                return (
                    <WithWrapper key = { index }/>
                );

            case 'article':
                WithWrapper = Wrapper(Article, item)
                return (
                    <WithWrapper key = { index }/>
                );
            }
    });
}