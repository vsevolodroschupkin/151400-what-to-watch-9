import { ChangeEvent, FormEvent, useState } from 'react';
import { SETTINGS } from '../../consts';
import { Comment } from '../../types/comment';


type AddReviewFormProps = {
  onReview: (comment: Comment) => void;
};

function AddReviewForm (props: AddReviewFormProps):JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const {onReview} = props;

  function commentChangeHandler ({target}: ChangeEvent<HTMLTextAreaElement>):void {
    const {value} = target;
    setComment(value);
  }

  function ratingChangeHandler ({target}: ChangeEvent<HTMLInputElement>) {
    const {value} = target;
    setRating(Number(value));
  }

  function formSubmitHandler( evt: FormEvent<HTMLFormElement>):void {
    evt.preventDefault();
    const formData = {
      comment,
      rating,
    };
    onReview(formData);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={formSubmitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(SETTINGS.STARS_COUNT).keys()].map((x) => ++x).reverse().map((item) => (
              <>
                <input className="rating__input" key={item} id={`star-${item}`} type="radio" name="rating" value={item} onChange={ratingChangeHandler}/>
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={commentChangeHandler} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
