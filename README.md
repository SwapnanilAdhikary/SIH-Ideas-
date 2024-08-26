# SIH-Ideas-
give all important ideas here
update from my side ---- 
trained a model for 3 hours on steamy laptop to get a 3 mb modle pth file 
i am adding research papers for reference 
1.https://en.wikipedia.org/wiki/Motion_interpolation
2.https://arxiv.org/pdf/2302.08455
3.https://arxiv.org/abs/1511.08458
1.frame interpolation --------1>frame 1 ............................frame2   '.' = 1frame generator overall 30 fps video
                              2>Used CNN but can go with any , also use FILM from Tensorflow for tweaking up 
                              3>on-device GPU for Optimization??? maybe
                              4>search for WMS services for fetching satellite images at regular interval of time - paid or free
                              what is OGC ? need to learn about it more about it
                              |   |            \
                              |   | --------->  \       ^---->video processing(GPU or Not lets see) 
                              |   |             /      _|_
                              image sender     / ->image reciver  
                              5> after Frame interpolation is over what we will have will be a gif ,of movement , 
                                 will save it on system or maybe somewhere idk we got FFmpeg library for that
                                 file comppresion?? based on the image quality and video quality ---pretty easy stuff 
                              6> Web map visualtization --> i don't have much idea regarding OpenLayers as off                   
                                 19th August 2024, but i am hoping that i will be needing to overlay the video onto the Map 
                                 like India weather shown over india and so on , just like a Overlay
                                 task to complete ---> whats openlayer? how to understand its working , how to overlay
                                 video
                                 ______________________
                                 |                    |     task - understand how opelayers work,and how to overlay video over 
                                 | |india  |          |           over the maps
                                 | |video of india|   |     extra task-video player interface?maybe
                                 |                    |     main - problem - video rendering can lead to lags 
                                 | |pakisthan|        |            what WMS services ? 
                                 | |video of pakisthan|     what kind of weather are they talking about? what kind of images 
                                 |____________________|     are generated from the satellite
21 August 2024 , time to lock in again, gonna try to work on some webgis, with openlayers
we should try to add features later on which can be beneficial for users 


The pretained model that is being used is- FILM ( FOR INFO)


26th August 2024
The overlay has started and is implemented with Leaflet .
Not yet figured out with openlayers and the total masking has not yet happened .
                              
