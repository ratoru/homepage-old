import React from "react";
import Link from "next/link";
// import styled from "styled-components";

// const Icon = styled.div`
//     transition: transform 50ms ease-in-out;
//     &:hover:  {
//         transform: translateX(-4px);
//     }
// `;

export const BackButton: React.FC = () => {
    return (
        <div style = {{ paddingTop: 30, paddingBottom: 10 }}>
            <Link href = "/">
                    <a style={{letterSpacing: '0.03em'}}>
                        <img src="/icons/chevron-left.svg" style = {{ position: "relative", top: 7}}/>
                         HOME 
                    </a>
            </Link>
        </div>
    );
  };

export default BackButton;