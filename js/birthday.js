      //the bday array data can be generated from server-side
      var arrBday = [
      ['Jonathan Groneng', '1/5'],
      ['Abby Kuhn', '1/8'],
      ['Brendan Wagner', '1/8'],
      ['Lina Ebert', '1/10'],
      ['TJ Warner', '1/11'],
      ['Amanda Wilfert', '1/21'],
      ['Dwight Sattler', '1/23'],
      ['Britney Burg', '1/24'],
      ['Darrin Oelke', '1/24'],
      ['Robert Evjen', '1/25'],
      ['Oran Sattler', '1/25'],
      ['Sarah Burg', '1/27'],
      ['Margaret Nikkhah', '2/9'],
      ['Oliver Sattler', '2/9'],
      ['Simon Sattler', '2/9'],
      ['Richard Schultz', '2/12'],
      ['Jack Shepherd', '2/12'],
      ['Blake Ritchie', '2/15'],
      ['Brian Schussman', '2/23'],
      ['Thomas Groneng', '2/24'],
      ['Margaret Peterson', '2/24'],
      ['Austin Schussman', '2/24'],
      ['Brent Shepherd', '2/27'],
      ['Emerson Hoefler', '2/28'],
      ['Audrey Enloe', '3/2'],
      ['Stefanie Wagner', '3/2'],
      ['Stephanie Shepherd', '3/6'],
      ['Abbey Burlingham', '3/7'],
      ['Warren Backus', '3/13'],
      ['Bill Dieterich', '3/13'],
      ['Myra Maurer', '3/13'],
      ['David Burg', '3/18'],
      ['Jean Pitzen', '3/27'],
      ['Maddie Ritchie', '3/27'],
      ['Mary Dempsey', '3/28'],
      ['Suzanne Lemke', '3/30'],
      ['Kyle Wagner', '4/8'],
      ['Carrie Oelke', '4/14'],
      ['April Pitzen', '4/15'],
      ['Charlie Hoefler', '4/17'],
      ['Kelly Burlingham', '4/22'],
      ['Issac Shepherd', '4/22'],
      ['Dana Wagner', '4/28'],
      ['John Lisowe', '5/4'],
      ['Tyler Schussman', '5/5'],
      ['Angie Prull', '5/6'],
      ['Leah Burg', '5/13'],
      ['Clayton Sattler', '5/13'],
      ['Tom Tomter', '5/17'],
      ['Kelly Groeschl', '5/19'],
      ['Peyton Salchert', '5/23'],
      ['Grant Burlingham', '5/25'],
      ['Joe Baltz', '5/26'],
      ['Cindy Schussman', '5/27'],
      ['Sarah Jain', '5/29'],
      ['Cathy Barr', '5/31'],
      ['Theresa Mayer', '6/5'],
      ['Bonnie Ebert', '6/7'],
      ['Marsha Lisowe', '6/8'],
      ['Terry Beckman', '6/12'],
      ['Grace Dieterich', '6/13'],
      ['Bruce Peterson', '6/13'],
      ['Erin Kuhn', '6/19'],
      ['Mackenzie Wagner', '6/29'],
      ['Andrea Duwell', '6/29'],
      ['Barb Mills', '7/4'],
      ['Brad Burg', '7/5'],
      ['Cara Wagner', '7/6'],
      ['Sue Schultz', '7/8'],
      ['William Dieterich V', '7/21'],
      ['Jessica Radloff', '7/25'],
      ['Dustin Wagner', '7/25'],
      ['Stephanie Dieterich', '8/1'],
      ['David Pitzen', '8/11'],
      ['David Burlingham', '8/12'],
      ['Mary Stellick', '8/12'],
      ['Shirley Maltby', '8/14'],
      ['John Ziegler', '8/17'],
      ['Roy Klessig', '8/20'],
      ['Linda Sattler', '8/23'],
      ['Lori Schmitz', '8/23'],
      ['Lorene Baltz', '8/25'],
      ['Richard Stellick', '8/27'],
      ['John Vanderputten', '8/28'],
      ['Ty Groeschl', '9/2'],
      ['Gayle Martin', '9/4'],
      ['Ken Prull', '9/6'],
      ['Eric Evjen', '9/7'],
      ['Morgan Groeschl', '9/8'],
      ['Carol Dieterich', '9/10'],
      ['Virginia Schussman', '9/11'],
      ['Jerrod Ebert', '9/14'],
      ['Eric Ritchie', '9/21'],
      ['Natalee Hoefler', '9/23'],
      ['Ann Martin', '10/6'],
      ['Clara Ebert', '10/11'],
      ['Howie Sattler', '10/11'],
      ['Nancy Beckman', '10/12'],
      ['Kevin Burlingham', '10/12'],
      ['Blair Mills', '10/12'],
      ['Weldon Sr. Peterson', '10/12'],
      ['Duncan Sattler', '10/13'],
      ['Emma Oelke', '10/15'],
      ['Angie Schussman', '10/15'],
      ['Ben Burlingham', '10/28'],
      ['Rick Dempsey', '10/31'],
      ['Mary Sattler', '11/1'],
      ['Richard Jr Dempsey', '11/2'],
      ['Angela Hoefler', '11/2'],
      ['Ann Burg', '11/4'],
      ['Rudy Sattler', '11/4'],
      ['Natalie Wagner', '11/6'],
      ['Chris Beckman', '11/9'],
      ['Mitchell Salchert', '11/13'],
      ['Zach Oelke', '11/18'],
      ['Craig Shepherd', '11/21'],
      ['Alex Kuhn', '11/24'],
      ['Jeannette Lisowe', '11/24'],
      ['Shannon Vanderputten', '11/30'],
      ['Cassy Dempsey', '12/1'],
      ['Lucas Groeschl', '12/1'],
      ['Marilyn Groneng', '12/3'],
      ['Nadia Burg', '12/4'],
      ['Lisa Ritchie', '12/6'],
      ['Jenny Warner', '12/9'],
      ['Neale Jensen', '12/11'],
      ['Sue Burlingham', '12/12'],
      ['Tom Schmitz', '12/12'],
      ['Rick Groeschl', '12/13'],
      ['Lori Salchert', '12/14'],
      ['Jason Hoefler', '12/16'],
      ['Kaylee Warner', '12/16'],
      ['Paul Groneng', '12/17'],
      ['Lauren Burlingham', '12/18'],
      ['Joseph Sattler', '12/19'],
      ['Tim Warner', '12/20'],
      ['Kim Beckman', '12/24'],
      ['Eva Salchert', '12/24'],
      ['Keith Weiland', '12/25'],
      ['Mark Weiland', '12/25'],
      ['Raquelle Pratt', '12/26'],
      ['JoAnne Burris', '12/27']
        //...and so on (last entry must not have a trailing comma)
      ];

      function getBdaysThisWeek(){
        var arrMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var bday, idx;
        var bdayList = new Array();
        var today = new Date();

        for (var i=0;i<arrBday.length;i++){
          var bday = new Date(arrBday[i][1] + '/' + today.getFullYear());
          if (isNaN(bday)) continue;

          if ( isBdayInRange(bday, 7) ){
             idx = bdayList.length;
             bdayList[idx] = new Object();
             bdayList[idx].name = arrBday[i][0];
             bdayList[idx].bday = bday;
             bdayList[idx].month = arrMonth[bday.getMonth()];      
          }
        }
        if (bdayList.length > 0){ //sort asc by birthdate
           bdayList.sort(
             function(a, b){
               if (a.bday < b.bday) return -1
               if (a.bday > b.bday) return 1;
               return 0;
             }
           );
        }
        return bdayList;
      }

      function isBdayInRange(bday, interval){
      //credit for this function goes to:
      //-Rob (@slingfive) Eberhardt, Slingshot Solutions
      //http://slingfive.com/pages/code/jsDate/jsDate.html
      //first, let's grab the post date
        var a = document.getElementById("foodate").textContent.split('-');

        var today = new Date(a[0],a[1]-1,a[2]); 
        //have to override time so entire day will be valid
        today.setHours(0,0,0,0);
        //set date to post date
        //if the birthday has already occurred in the year, increment to the next year
        if (bday < today)
          bday.setFullYear(bday.getFullYear() + 1);
        
        // get ms between dates (UTC) and make into "difference" date
        var iDiffMS = bday.valueOf() - today.valueOf();
        //divide iDiffMS by 1000, Seconds, Minutes, Hours
        nDays = parseInt(iDiffMS / 1000 / 60 / 60 / 24);
        
        if(parseInt(nDays) <= parseInt(interval))
          return true;
        else
          return false;
      }

      function displayBdayList(){
        var date = new Date().getDate();  
        var bdayList = getBdaysThisWeek();
        var len = bdayList.length;
        var s = "<h3>Happy Birthdays to:</h3>";
        if (len>0){
          s += '<ul>';
          for (var i=0; i<len; i++){
             //be mindful of the string-line continuation character (\) at the end of the first line
          s += '<li' + ((date == bdayList[i].bday.getDate())?' class="bdayToday"':'')+ '>\
                <strong>' + bdayList[i].name + '</strong> - ' 
                + bdayList[i].month + ' ' + bdayList[i].bday.getDate() + '</li>';       
          }
          s += '</ul>';
        }
        else{
          s += "No birthday celebrant for this week.";
        }
        document.write(s);
      }