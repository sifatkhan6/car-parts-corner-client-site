import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mx-6 my-12'>
            <div className='quesBody '>
                <h2 className='text-2xl font-bold'>Que-1: How will you improve the performance of a React Application?</h2>
                <br />
                <p><strong>Ans:</strong> Need to keep component state local where necessary. Need to memorize React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import. Need to Windowing or list virtualization in React. Need to  optimize Dependency. Need to avoid Inline Function Definition in the Render Function. Need to avoid using Index as Key for map. Need to avoide Props in Initial States and etc.</p>
            </div>
            <div className='quesBody '>
                <h2 className='text-2xl font-bold'>Que-2: What are the different ways to manage a state in a React application?</h2>
                <br />
                <p><strong>Ans:</strong> There has Four Kinds of React State to Manage. 1. Local state, 2. Global state, 3. Server state, 4. URL state.
                    <br />
                    Local state is data we manage in one or another component. Global state is data we manage across multiple components. Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters.
                </p>
            </div>
            <div className='quesBody '>
                <h2 className='text-2xl font-bold'>Que-3: How does prototypical inheritance work?</h2>
                <br />
                <p><strong>Ans:</strong> JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed prototypal inheritance. Its mean that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages. Its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
                </p>
            </div>
            <div className='quesBody '>
                <h2 className='text-2xl font-bold'>Que-4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                <br />
                <p><strong>Ans:</strong> The raeson we should not set state directly is, If we update it directly, calling the setState() afterward may just replace the update we made. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components.
                </p>
            </div>
            <div className='quesBody '>
                <h2 className='text-2xl font-bold'>Que-5: What is a unit test? Why should write unit tests?</h2>
                <br />
                <p><strong>Ans:</strong> A unit test is a way of testing a unit, the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. 
                <br />
                Unit testing ensures that all code meets quality standards before its deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
            </div>
        </div>
    );
};

export default Blog;