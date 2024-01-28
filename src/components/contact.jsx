function ContactH(prop) {
    return (
      <div>
        <h2 class ='contactForm'>Contact Me</h2>
        <form class ='contactForm'>
          <input placeholder="Enter Name"/>
          <input placeholder="Enter E-mail"/>
          <textarea id="textedTyped" placeholder="Write a message here" rows="5" cols="33"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ContactH;