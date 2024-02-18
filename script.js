
let ui = document.querySelector(".wrapper");

intialProf();


function intialProf(){

    let dp = document.querySelector("[data-userDp]");
    let username = document.querySelector("[data-username]");
    let jd = document.querySelector("[data-userJd]");
    let profile = document.querySelector("[data-userProfile]");
    let bio = document.querySelector("[data-userBio]");
    let repoCount = document.querySelector("[data-repoCount]");
    let folcount = document.querySelector("[data-followerCount]");
    let folwincount = document.querySelector("[data-followingCount]");
    let location = document.querySelector("[data-location]");
    let blog = document.querySelector("[data-blog]");
    let acc = document.querySelector("[data-twitter]");
    let company = document.querySelector("[data-company]");

    dp.src = 'https://avatars.githubusercontent.com/u/117151304?v=4'

    username.innerText = "Harsh sahani";

    jd.innerText = "Joined 01 November 2022";

    profile.href = 'https://github.com/harshsahani14';
    profile.innerText = '@harshsahani14';

    bio.innerText = "This Profile has no Bio"

    repoCount.innerText = '6';

    folcount.innerText = '0';

    folwincount.innerText = '3';

    location.innerText = 'Not Available';

    blog.innerText = 'Not Available';

    acc.innerText = 'Not Available';

    company.innerText = 'Not Available';

}


let btn = document.querySelector(".searchBtn");

btn.addEventListener("click",getData);

async function getData(){

    let input = document.querySelector("[data-searchUser]");
    
    let username = input.value;
    try{

        let response = await fetch(`https://api.github.com/users/${username}`);

        let data = await response.json();

        render(data);

    }catch(e){
        
        console.log(e);
        let errorMsg = document.querySelector(".errorMsg");

        errorMsg.classList.add("active");

        setTimeout(displayerr,2000);
    }
}

function render(data){

    // Light mode
    if(data?.login === undefined){

        displayerr();
        
    }else{

    let dp1 = document.querySelector("[data-userDp]");
    let username1 = document.querySelector("[data-username]");
    let jd1 = document.querySelector("[data-userJd]");
    let profile1 = document.querySelector("[data-userProfile]");
    let bio1 = document.querySelector("[data-userBio]");
    let repoCount1 = document.querySelector("[data-repoCount]");
    let folcount1 = document.querySelector("[data-followerCount]");
    let folwincount1 = document.querySelector("[data-followingCount]");
    let location1 = document.querySelector("[data-location]");
    let blog1 = document.querySelector("[data-blog]");
    let acc1 = document.querySelector("[data-twitter]");
    let company1 = document.querySelector("[data-company]");




        dp1.src = data?.avatar_url;
        
        
        
        if(data?.name == null){
            username1.style.cssText = 'display:none';
            
        }else{
            username1.innerText = data?.name;
            
        }

        profile1.href = `https://github.com/${data?.login}`;
        profile1.innerText = `@${data?.login}`;
        


        let dateString = data?.created_at;
        let date = new Date(dateString);

        let year = date.getFullYear();
        let month = date.toLocaleDateString('default',{month:'long'});
        let day = date.getDate();

        jd1.innerText = `Joined ${day} ${month} ${year}`;
       
        
        

        if(data?.bio == null){
            bio1.innerText = "This Profile has no Bio";
            
        }else{
            bio1.innerText = data?.bio;
            
        }

        repoCount1.innerText = data?.public_repos;
        folcount1.innerText = data?.followers;
        folwincount1.innerText = data?.following;

        


        if(data?.location == null){
            location1.innerText = "Not available";
            
        }else{
            location1.innerText = data?.location;
            
        }

        if(data?.blog == ""){
            blog1.href="";
           
            blog1.innerText = "Not available";
            
        }else{
            blog1.href = `https://${data?.blog}`;
            
            blog1.innerText = data?.blog;
            
            
        }
        

        if(data?.twitter_username == null){
            acc1.href = "";
            
            acc1.innerText = "Not available";
            
        }else{
            acc1.href = `https://twitter.com/${data?.twitter_username}`;
            
            acc1.innerText = data?.twitter_username;
            
        }
        
        if(data?.company == null){
            company1.innerText = "Not availble";
            
        }else{
            company1.innerText = data?.company;
            
        }
    
    }
    

    



}

let ui_color = document.querySelector(".ui-color");

ui_color.addEventListener("click",changeUI);

function changeUI(){
    
    let ui_text = document.querySelector("[data-uiText]");
    let projName = document.querySelector(".projname");
    let ui_icon = document.querySelector("[data-uiIcon]");
    let searchDiv = document.querySelector(".searchDiv");
    let inputText = document.querySelector("[data-searchUser]");

    let gitInfo = document.querySelector(".githubInfo");

    let userName = document.querySelector("[data-username]");

    let jd = document.querySelector("[data-userJd]");
    let bio = document.querySelector("[data-userBio]");
    let moreInfo = document.querySelector(".moreInfo");
    let info = document.querySelector(".mainInfo");
    let non_content1 = document.querySelector(".non-content1");
    let non_content2 = document.querySelector(".non-content2");
    let non_content3 = document.querySelector(".non-content3");

    let img_loc = document.querySelector("#img-location");

    let loc = document.querySelector("[data-location]");
    let blog = document.querySelector("[data-blog]");
    let acc_name = document.querySelector("[data-twitter]");
    let company = document.querySelector("[data-company]");


    if(ui_text.innerText  === "DARK"){

        ui.style.backgroundColor = "#152238";
        projName.style.color = "white";


        ui_text.innerText = "LIGHT";
        ui_text.style.color = "white";
        ui_icon.src = "Images/sun-icon.svg";

        searchDiv.style.backgroundColor = "#23395d";

        // Needed to be dealt later
        searchDiv.style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.2)";

        inputText.style.color = "white";
        inputText.style.opacity = 1;

        gitInfo.style.backgroundColor = "#23395d";

        userName.style.color = "white";

        jd.style.color = "white";
        jd.style.opacity = 1;

        bio.style.color = "white";

        moreInfo.style.backgroundColor = "#152238";

        moreInfo.style.color = "white";

        non_content1.style.color = "white";
        non_content2.style.color = "white";
        non_content3.style.color = "white";

        img_loc.style.cssText = "filter: grayscale(0%)";

        loc.style.color = "white";
        blog.style.color = "white";
        acc_name.style.color = "white";
        company.style.color = "white";
    }else{

        ui.style.backgroundColor = "#f6f8ff";
        projName.style.color = "#4b6a9b";

        ui_text.innerText = "DARK";
        ui_text.style.color = "#4b6a9b";
        ui_icon.src = "Images/moon-icon.svg";

        searchDiv.style.backgroundColor = "#fefefe";
        searchDiv.style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.2)";

        inputText.style.color = "#4b6a9b";
        inputText.style.opacity = 0.75;

        gitInfo.style.backgroundColor = "#fefefe";
        userName.style.color = "#4b6a9b";

        jd.style.color = "#4b6a9b";
        jd.style.opacity = 0.75;


        bio.style.color = "#4b6a9b";
        moreInfo.style.backgroundColor = "#f6f8ff";
        moreInfo.style.color = "#4b6a9b";


        non_content1.style.color = "#4b6a9b";
        non_content2.style.color = "#4b6a9b";
        non_content3.style.color = "#4b6a9b";


        img_loc.style.cssText = "filter: grayscale(0%)";

        loc.style.color = "#4b6a9b";
        blog.style.color = "#4b6a9b";
        acc_name.style.color = "#4b6a9b";
        company.style.color = "#4b6a9b";

















    }
}

function displayerr(){

    let errorMsg = document.querySelector(".errorMsg");

    errorMsg.classList.add("active");

    setTimeout(function(){
            errorMsg.classList.remove("active");
    },2000);
    
}

