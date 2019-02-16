({
    handleClick: function (cmp, event) {
        var attributeValue = cmp.get("v.text");
        console.log("current text: " + attributeValue);
        var target = event.getSource();
        cmp.set("v.text", target.get("v.label"));
    
        var compEvent = cmp.getEvent("sampleComponentEvent");
        // Optional: set some data for the event (also known as event shape)
        // A parameter’s name must match the name attribute
        // of one of the event’s <aura:attribute> tags
        // compEvent.setParams({"myParam" : myValue });
        console.log("coming from Event");
        compEvent.fire();
    },
})