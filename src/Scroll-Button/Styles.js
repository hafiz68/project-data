import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
  width: 100%;
   left: 95%;
   bottom: 80px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #3486eb;
   @media screen and (max-width: 900px) {
      left:90%;
      }
      @media screen and (max-width: 500px) {
         left:70%;
         }
         @media screen and (max-width: 600px) {
            left:82;
            }
            @media screen and (max-width: 300px) {
               left:40;
               }
               @media screen and (max-width: 400px) {
display:none;
                  }
                  @media screen and (max-width: 1100px) {
                     left:84%;
                  }
`;


