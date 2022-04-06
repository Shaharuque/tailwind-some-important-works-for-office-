import React from 'react';

const Accordian = () => {
    return (
        <div>
            <div className="min-h-screen">
                <div className="max-w-md mx-auto px-8 space-y-2 mt-20">
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How does it work ?</summary>
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How to use tailwind css 3 in react</summary>
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How to install Tailwind CSS 3 ?</summary>
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How to send feedback ?</summary>
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>

                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How to send feedback ?</summary>
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>

                    <details className="p-4 rounded-lg">
                        <summary className="font-semibold">How to send feedback ?</summary>
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Accordian;