function ContactH(prop) {
    return (
      <div>
        <h3>Contact Me</h3>
        <form class ='contactForm'>
          <input placeholder="name"/>
          <input placeholder="name"/>
          <textarea id="textedTyped" placeholder="message here" rows="5" cols="33"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ContactH;