Why abstraction is necessary
- In traditional structured programming, we couldn't safely implement what's known as dynamic binding — 
    the ability to refer to an abstraction (something that doesn't concretely exist) 
    and feel confident that the dependency would work with our code.
- 

https://khalilstemmler.com/blogs/typescript/abstract-class/

---------------------------------------------------------------------------------------------
---> write the code for an OS that made USB ports work

switch (deviceType) {
    case 'MOUSE':
        mouseSubroutine();
    case 'HEADPHONES':
        headphonesSubroutine();
    case 'MIDI_KEYBOARD':
        midiKeyboardSubroutine();
    case 'WEBCAM':
        webcamSubroutine();
}

That won't scale. What happens when there's a new type of USB device? 
Come in and write more code?


What if there was a way to invert this dependency relationship? 
What if we could focus on defining a contract 
    containing all the necessary things that a USB device needs to provide if they want it to work with the OS — 
    and leave it to future USB device developers to implement them?

We are asking
    what if we could program against an abstraction instead of an implementation (a concretion)


Dependency Inversion — 
    we do not directly depend on the concretions; 
    instead, we rely on the abstraction that the concretions depend on; 
    this keeps our core code unit testable.


---------------------------------------------------------------------------------------------
