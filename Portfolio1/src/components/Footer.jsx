import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8 border-t border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500">
                    © {new Date().getFullYear()} Tulya Jain | Computer Science Student
                </p>
            </div>
        </footer>
    );
};

export default Footer;
