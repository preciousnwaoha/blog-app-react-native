import {createContext, useReducer} from 'react';

const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }

}

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);


    return <BlogContext.Provider value={{
        blogPosts,
        addBlogPost: () => dispatch({type: 'add_blog_post'}),
    }}>
        {children}
    </BlogContext.Provider>;
}

export default BlogContext;