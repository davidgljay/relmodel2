import React, {Component} from 'react'
import RelIntro from './RelIntro'
import RelDefinition from './RelDefinition'
import RelTemperature from './RelTemperature'
import RelColor from './RelColor'
import RelGame from './RelGame'
import LimitsToPrediction from './LimitsToPrediction'

class Home extends Component {



  render () {
    return <div style={styles.pageContainer}>
      <div className="Home" style={styles.container}>
        <h1>Relationality</h1>
        <h3>A mathematical framework for the measurement and prediction of relationships.</h3>
        <RelIntro/>
        <div style={styles.explainer}>
          An example of a mathematical model in which flows of information move
          from randomness to stability.<br/>
          Color illustrates how relational dynamics alter the state of a system
          over time.
        </div>
        <h3>Why Measure and Predict Relationships?</h3>
        <div style={styles.paragraph}>
          In 1949 a <a href="https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication">landmark scientific paper</a> described a mathematical framework
          for measuring information in bits.
          This framework allowed scientists and engineers to precisely understand
          how information would behave regardless of what kind of information it was.
          By figuring out how to send, store and process bits, scientists could suddenly
          send, store and process any kind of information.
        </div>
        <div style={styles.paragraph}>
          This project seeks to create a similar mathematical framework for
          relationships, one that will allow precise and meaningful predictions
          to be made about relationships regardless of the kind of relationships
          involved. The goal is not to control the outcome of relationships (in fact
          there are hard mathematical limits to such control), but to enable richer
          conversation about how to create environments in which relationships thrive.
        </div>
        <h3>What is a Relationship?</h3>
        <div style={styles.paragraph}>
          While relationships between humans are very different from
          relationships between bacteria or relationships between atoms, all involve
          <b> dynamic flows of information with the ability to stabilize over time. </b>
          By examining the fundamental properties of such flows of information
          it is possible to map out universal dynamics which all relationships
          share.
        </div>
        <h4>Relationships Move From Chaos To Stability</h4>
        <RelDefinition height={150} width={300} numNodes={20}/>
        <div style={styles.paragraph}>
          Relationships form when information being randomly transmitted across
          a system finds a self-reinforcing feedback loop. These stable flows of
          information go on to reshape the entities sending and receiving them.
        </div>
        <h4>Some Relationships Are More Likely To Form Than Others</h4>
        <RelColor height={200} width={200} radius={70}/>
        <div style={styles.paragraph}>
          Different kinds of information will have different impacts on a system.
          Information which changes how something behaves (that is, changes how it sends
          its own information out to the world) is more likely to result in a relationship
          than information which doesn't.
        </div>
        <h4>Relationships Often Form In A Noisy Environment</h4>
        <RelTemperature height={150} width={300} numNodes={20}/>
        <div style={styles.paragraph}>
          Most relationships do not happen in a vacuum. New information from
          the surrounding environment constantly disrupts stable relational states.
          To persist, relationships must not only establish a stable flow of information,
          but continuously re-establish that flow in response to external stress.
        </div>

        <h3>How Can We Measure Relationships?</h3>
        <div style={styles.paragraph}>
          A metric can never capture the full complexity of a relationship the way
          that a series of bits can never fully capture a the experience of listening to music.
          But relational measurement can help us to make sense of relationships and
          facilitate their growth.
        </div>
        <h4>We Measure Relationships By Measuring How Order Emerges From Disorder</h4>
        <RelDefinition height={150} width={300} numNodes={20} showProbabilities/>
        <div style={styles.paragraph}>
          This entropy curve provides a snapshot of how relationships are forming over time.
          If relationships form quickly, if a system is highly relational, then entropy will go down quickly.
          If relationships are unstable it will oscillate up and down. By examining the entropy curve
          for a system overall or for individual nodes in that system we get a useful quantitative measure of relationship formation.
        </div>
        <div style={styles.paragraph}>
          This quantified measure lets us ask a number of new and interesting questions about
          how relationships form. For example, we can measure the similarity between entropy curves from two
          different systems to see if they have similar properties. We can look at the entropy curve of a system,
          compare it to other systems we've seen, and predict how good it will be at
          forming relationships in the future. We can compare entropy curves from two different kinds of systems
          (say, the inside of a cell and the data in a social network) and see what they have
          in common. If we observe that two systems have similar entropy curves we can infer other things about their structure.
        </div>
        <div style={styles.paragraph}>
          But there are also limits. It is extremely difficult to measure the
          entropy curve of something as complex as a human relationship (though there are
          ways to use proxy measurements.) There are also hard limits to how accurately
          we can predict relationships over long periods of time.
        </div>
        <h4>Some Aspects Of Relationships Are Impossible To Predict</h4>
        <div style={styles.paragraph}>
          There are significant limits to what we can predict about relationships
          because of what's popularly known as the butterfly effect.
          In order to predict something you need to construct a predictive model
          of how it works, calibrate your model to match reality, then run the model
          forward in time to see what will happen.
        </div>
        <div style={styles.paragraph}>
          Let's do that here. We'll create two relational models: one that represents reality,
          and another that represents our predictive model. We'll assume that we're super smart
          and that our predictive model perfectly represents reality (good luck with this in the real world).
          We'll also assume that we're very well informed, and that our predictive model is calibrated to match reality with 99.9% accuracy.
          What happens?
        </div>
          <LimitsToPrediction numNodes={20} height={300} width={300} radius={120}/>
        <div style={styles.paragraph}>
          The near-perfect predictive model rapidly diverges from reality, settles in a
          stable and somewhat similar place, then continues to slowly drift. Some version
          of this behavior happens in all relational systems: tiny deviations between a predictive
          model and reality compound, causing predictions to become less and less accurate.
          You could have a superpowered AI the size of the sun and near-perfect information
          about the location of every atom on earth, and you still wouldn't be able to predict
          a human relationship over a long time horizon. The better the relationship, the more
          it helps the people in it dynamically connect to and learn from their environment,
          the harder the prediction becomes.
        </div>
        <div style={styles.paragraph}>
          As a rule of thumb: <b>relationality + time = unpredictability</b>. The better
          a system is at forming new and interesting relationships the faster all
          predictive models describing that system will fail. You can
          predict a bad (arelational) conversation over a long time horizon, or the first few
          moments of a good conversation, but you can't know where a good conversation is headed.
        </div>
        <div style={styles.paragraph}>
          This fundamental unpredictability makes it hard to use relational environments
          to have power over people. If I create a good relationship
          (a highly relational environment) then I can know that good and interesting things
          will happen but I can't know precisely what those things are. Relational systems are a
          bad if you want to optimize for a particular outcome, like getting people to buy a
          product or believe a particular idea. But they're great if you want to generate new unexpected
          possibilities, if you want to come up with creative uses for something or invent new ideas.
          This is true whether your relational system is a bunch of people, an ecosystem of
          plants and animals, or any other system where information is exchanged.
        </div>
        <h3>You Can Predict Relationality When You Can't Predict Much Else</h3>
        <div style={styles.paragraph}>
          It turns out that you can predict the relationality of a system even when it's
          impossible to predict many other things about it. You probably have experienced
          this in your life. Sometimes you meet someone and have a gut feeling that a conversation
          with them will be interesting. You don't know what exactly the conversation
          will look like (not knowing is part of the fun!) but you know that
          it's more likely to lead to connection than most conversations you have.
        </div>
        <div style={styles.paragraph}>
          This is an example of a <b>relational prediction</b>, a prediction not about
          what precisely a relationship will look like, but about how likely it is to form.
          Many of us develop deep intuitions for what conditions are likely to lead
          to meaningful relationships forming and what conditions aren't. Relationality
          allows us to use quantitative analysis to make these same kinds of predictions.
          By examining the structure of a system we can understand how relationships in it will evolve
          (and vice versa).
        </div>
        <h4>See How Conditions Of The System Effect Relationality.</h4>
        <RelGame height={300} width={300} radius={120} />
        <div style={styles.paragraph}>
         What do you observe? Note that systems which maintain separate colors tend to be more relational
         than systems which don't: entropy drops faster and stable flows of information occur
         more quickly, even if we can't predict exactly how. See if you can notice other factors at play.
         Can you predict whether a particular configuration will form stable relationships quickly or slowly?
         Note that you can make this prediction, a prediction about relationality, even
         when it's impossible to know what the end state of the system will be.
        </div>
        <div style={styles.paragraph}>
         This is one small example of how the conditions in a relational system
         let us predict how quickly relationships will form. It's possible to measure a system
         and scientifically predict how good it will be at forming relationships, even if
         we can't predict what those relationships will look like. It's also possible
         to measure a system and then predict what changes might make it more relational.
         Making these predictions can let us recognize, build and protect highly relational environments
         in the world around us; to create schools, gatherings, community centers and workplaces that are
         optimized for relationality.
        </div>
        <h3>Are these measurements and predictions useful, and if so how?</h3>
        <div style={styles.paragraph}>
          Not yet. The framework being explored here isn't good for anything other than
          abstract metaphore, more work is needed to see if it is capable of making
          verifyable predictions about relational systems to a high degree of accuracy.
          If it can, then it opens several intriguing possibilities.
        </div>
        <div style={styles.paragraph}>
          Right now we live in a world where it's hard to turn money into relationships.
          We can turn money into other complicated things like airplanes, power plants, and
          rock concerts, but it's challenging to financially invest in human connection.
          It's not that we don't know how: many artists, community organizers, and
          facilitators excel at creating human connection, but it's often difficult
          for them to get paid for their skilled labor.
        </div>
        <div style={styles.paragraph}>
          This is because it's hard to invest in things that aren't measurable.
          If I want to invest a million dollars in relationship building, how do I
          know who to give it to or whether they've used it well? Relationships have
          a wide range of benefits that make them worth investing in: they improve health and happiness,
          they increase resilience and innovation, they prevent violence and improve neighborhoods.
          But because relationships are intrinsically unpredictable they're often a bad way to make
          specific, measurably good things will happen. We have to invest knowing that doing so
          will lead to unpredictably good things happening. Without a specific predictable outcome
          to measure it is extremely difficult to know if a particular investment in
          relationship building has been effective, which means that the market for
          relational labor largely runs on inspiring storytelling and personal trust.
          It is similar to how the market for medical services worked before the advent of
          rigorous medical science.
        </div>
        <div style={styles.paragraph}>
          What if that changed? What if it became straightforward to measure when relationships
          were forming and to invest time and money in the best possible strategies for
          forming them? Imagine that I could take a million dollars, define a particular
          kind of relationship I was interested in forming, and automatically divide it up in
          small chunks to the people most effective at building that class of relationship.
          Imagine that the people building those relationships could take my money and
          invest in scientifically proven strategies for making relationships happen,
          all while collecting relational data to improve our scientific understanding
          of how relationships work.
        </div>
        <div style={styles.paragraph}>
          The result would be a world where well-compensated experts and the systems that they
          have designed would be available to help anyone create any kind of relationship
          that they want within the bounds of the law. People looking for intimacy would
          be able to choose the kind of intimacy that they wanted and participate in
          systems that produce it as reliably as a well-tended garden produces food. People who
          wanted to be able to drive collaboration between disciplines or build learning communities for kids or
          set the conditions for creative work would be able to do so with the degree
          of certainty that we now have about performing medical procedures or
          sending people to space.
        </div>
        <div style={styles.paragraph}>
          A methodology for measuring and predicting relationship formation could transform
          our schools, our workplaces, and our civic institutions in the way that the
          methodology for turning information into bits has transformed our libraries, our newspapers
          and our concert halls. But first we need to do the underlying exploratory work to understand if such
          measurement is possible. If you're someone with the skills and interest to help with that work I'd love your help.
        </div>
        <div style={styles.paragraph}>
          I am reachable at relationalityxyz at gmail dot com.
        </div>
        <h3>Who made this?</h3>
        <div style={styles.paragraph}>
          My name is David Jay, I'm a <a href="https://medium.com/s/story/relationship-machines-675305924d5">community organizer</a>
          and <a href="https://medium.com/the-establishment/my-path-to-becoming-a-third-parent-41b823809c14">coparent</a>
          with a background in physics and sociology. I've spent a good chunk of my life
          building software that builds social movements and exploring what the word "relationship"
          means through an <a href="https://asexuality.org">asexual</a> lens.
          Exploring relational measurement and its impications is a hobby of mine.
        </div>
        <div style={styles.paragraph}>
          I'm happy to discuss this work, especially with people interested in exploring
          properties of relationality, doing adjacent work that might inform mine, or
          turning me on to existing research that could inform my work.
          Critiques that can move my thinking forward are welcome as well!
        </div>
      </div>
    </div>
  }
}

export default Home

const styles = {
  pageContainer: {
    width: 'calc(100%-40px)',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 80,
    fontFamily: 'Montserrat'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 900,
    textAlign: 'center'
  },
  explainer: {
    fontStyle: 'italic',
    color: 'grey'
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'left',
    padding: 10
  }
}
