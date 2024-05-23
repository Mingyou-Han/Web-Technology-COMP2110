# COMP2110 Week 04


Briefly summarise the work you've done this week here.

# Task 1 javascript fake news modifing

https://petnews.com.au/

# `code` headlines = document.getElementsByTagName("h2") `code`

(By using inspect, it gets all h2 elements)

# `code` headlines[0].innerHTML `code` 

(finds the headline content)

Now modify this to add your own message to the page

# `code` headlines[0].innerHTML = "COMP2110 Found to be Best Unit in the Universe!" `code`

Modifies the content.

![Alt text](image.png)



## Javascript for loop + Function

``` 

`code`
function 
updateHeadlines(newMessage) {
  const headlines = document.getElementsByTagName("h2"); 
  for (let i = 0; i < headlines.length; i++) {
    headlines[i].innerHTML = newMessage;
  }
}

```

`code` 

 function call ``` ` updateHeadlines("Hello World"); ` ```



 ```  for (let i = 0; i < headlines.length; i++) {
  headlines[i].innerHTML = "COMP2110 Found to be Best Unit in the Universe!";
}  ```



from