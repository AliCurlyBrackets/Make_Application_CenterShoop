const supportsPopover = () => 
    HTMLElement.prototype.hasOwnProperty("popover");
  
  const popoverIsNotSupported = () => {
    popover.textContent = "Popover API not supported.";
    closeIcon.hidden = true;
  }
  
  const popover = document.getElementById("popover");
  const closeIcon = document.getElementById("close-icon");
  
  (supportsPopover())
    ?  closeIcon.popoverTargetAction = "hide"
    :  popoverIsNotSupported();
  
  
  const svgContainer = document.getElementById("svg");
  svgContainer.innerHTML = townSVG;