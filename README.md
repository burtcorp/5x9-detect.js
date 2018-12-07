# @5x9/detect

Detect whether your visitors are using adblockers or not.

## How to use

```html
<script src="fivenine.detect.js"></script>
<script>
  fivenine.detectAdblock(function(adblockDetected) {
    if(adblockDetected) {
      // the user has enabled adblock
    } else {
      // no adblocker detected
    }
  })
</script>
```

## How it works

The scripts attempts to load a 3rd party script with a filename that is blacklisted by adblockers, and then checks whether it was successfully loaded and run or not.