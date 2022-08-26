import data from './data';
import {useState, useMemo, useDeferredValue, useTransition} from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    //чтобы сначал вводили а потом был поиск (очередность рендера определяется) (действует сам)
    const defferedValue = useDeferredValue(text);



    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(defferedValue));
    }, [defferedValue]);

    const onValueChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
