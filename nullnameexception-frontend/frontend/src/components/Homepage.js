import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <HomepageContainer>
        <HomepageHeader>
            <HomepageTitle>Website Title</HomepageTitle>
            <NavLink to="/signup">Signup Here</NavLink>
        </HomepageHeader>
        <HomepageContent>
            <Runner>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor ut arcu elementum dapibus. Morbi tortor nunc, tempus et massa ac, bibendum gravida mi. Cras fermentum nisl turpis, eu placerat magna interdum vel. Praesent pretium congue nunc, ullamcorper faucibus orci dignissim et. Etiam vitae mauris faucibus nisi pharetra eleifend. Proin aliquam molestie tincidunt. Praesent ut condimentum turpis. Nullam imperdiet neque in diam mollis, tincidunt consectetur eros sollicitudin. Ut non metus et purus finibus blandit vel sit amet diam. Curabitur sit amet lectus a orci congue vulputate sed eget dolor. Etiam mollis odio id tortor interdum dapibus. Nulla non magna dui. In posuere id est sit amet fermentum.

Phasellus posuere porta tortor. Duis molestie odio quis varius convallis. Curabitur lacinia sapien id dictum bibendum. Curabitur maximus, purus non vulputate blandit, erat felis blandit metus, eget auctor nulla lorem id ipsum. In nisl augue, pellentesque a fermentum ut, ultrices at libero. Duis vitae ante nisi. Morbi a erat eros. Sed auctor augue augue. Sed posuere rutrum pharetra. Morbi orci velit, venenatis quis nisl id, vestibulum fringilla leo. Donec ornare aliquam ullamcorper.
                <LearnButton>Learn More</LearnButton>
            </Runner>
            <br></br>
            <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dolor ut arcu elementum dapibus. Morbi tortor nunc, tempus et massa ac, bibendum gravida mi. Cras fermentum nisl turpis, eu placerat magna interdum vel. Praesent pretium congue nunc, ullamcorper faucibus orci dignissim et. Etiam vitae mauris faucibus nisi pharetra eleifend. Proin aliquam molestie tincidunt. Praesent ut condimentum turpis. Nullam imperdiet neque in diam mollis, tincidunt consectetur eros sollicitudin. Ut non metus et purus finibus blandit vel sit amet diam. Curabitur sit amet lectus a orci congue vulputate sed eget dolor. Etiam mollis odio id tortor interdum dapibus. Nulla non magna dui. In posuere id est sit amet fermentum.

Phasellus posuere porta tortor. Duis molestie odio quis varius convallis. Curabitur lacinia sapien id dictum bibendum. Curabitur maximus, purus non vulputate blandit, erat felis blandit metus, eget auctor nulla lorem id ipsum. In nisl augue, pellentesque a fermentum ut, ultrices at libero. Duis vitae ante nisi. Morbi a erat eros. Sed auctor augue augue. Sed posuere rutrum pharetra. Morbi orci velit, venenatis quis nisl id, vestibulum fringilla leo. Donec ornare aliquam ullamcorper.</Info>

        </HomepageContent>


    </HomepageContainer>
  )
}

export default Homepage

const HomepageContainer = styled.div`

`
const HomepageHeader = styled.div`

`
const HomepageTitle = styled.div`

`
const HomepageContent = styled.div`

`
const NavLink = styled(Link)`

`
const Runner = styled.div`

`
const LearnButton = styled.button`

`
const Info = styled.div`

`